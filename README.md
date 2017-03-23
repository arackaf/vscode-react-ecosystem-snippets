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
| `rccp→`   | class component default export skeleton with prop types |
| `rjccp→`  | class component skeleton with prop types, without import or default export |
| `rmcc→`   | mobx class component default export skeleton |
| `rmjcc→`  | mobx class component skeleton without import or default export |
| `rmccp→`  | mobx class component default export skeleton with prop types |
| `rmjccp→` | mobx class component skeleton with prop types, without import or default export |
| `rsc→`    | inline SFC default export skeleton |
| `rscb→`   | SFC default export skeleton |
| `rjsc→`   | inline SFC without import or export |
| `rjscb→`  | SFC without import or export |
| `rscp→`   | inline SFC with prop types default export skeleton |
| `rscbp→`  | SFC with prop types default export skeleton |
| `rjscp→`  | inline SFC with prop types, without import or export |
| `rjscbp→` | SFC with prop types, without import or export |
| `rmsc→`   | mobx inline SFC default export skeleton |
| `rmscb→`  | mobx SFC default export skeleton |
| `rmjsc→`  | mobx inline SFC without import or export |
| `rmjscb→` | mobx SFC without import or export |
| `rmscp→`  | mobx inline SFC with prop types default export skeleton |
| `rmscbp→` | mobx SFC with prop types default export skeleton |
| `rmjscp→` | mobx inline SFC with prop types, without import or export |
| `rmjscbp→`| mobx SFC with prop types, without import or export |
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

The following table lists the supported prop type snippets.
They all begin with ```pt``` so it's easy to explore all available options.

Each prop type snippet has an equivalent for when the property is required.
For example ```pta``` creates ```PropTypes.array``` while ```ptar``` creates ```PropTypes.array.isRequired```

| Trigger  | Content |
| -------: | ------- |
| `pta→`   | PropTypes.array |
| `ptar→`  | PropTypes.array.isRequired |
| `ptb→`   | PropTypes.bool |
| `ptbr→`  | PropTypes.bool.isRequired |
| `ptf→`   | PropTypes.func |
| `ptfr→`  | PropTypes.func.isRequired |
| `ptn→`   | PropTypes.number |
| `ptnr→`  | PropTypes.number.isRequired |
| `pto→`   | PropTypes.object. |
| `ptor→`  | PropTypes.object.isRequired |
| `pts→`   | PropTypes.string |
| `ptsr→`  | PropTypes.string.isRequired |
| `ptnd→`  | PropTypes.node |
| `ptndr→` | PropTypes.node.isRequired |
| `ptel→`  | PropTypes.element |
| `ptelr→` | PropTypes.element.isRequired |
| `pti→`   | PropTypes.instanceOf(ClassName) |
| `ptir→`  | PropTypes.instanceOf(ClassName).isRequired |
| `pte→`   | PropTypes.oneOf(['News', 'Photos']) |
| `pter→`  | PropTypes.oneOf(['News', 'Photos']).isRequired |
| `ptet→`  | PropTypes.oneOfType([PropTypes.string, PropTypes.number]) |
| `ptetr→` | PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired |
| `ptao→`  | PropTypes.arrayOf(PropTypes.number) |
| `ptaor→` | PropTypes.arrayOf(PropTypes.number).isRequired |
| `ptoo→`  | PropTypes.objectOf(PropTypes.number) |
| `ptoor→` | PropTypes.objectOf(PropTypes.number).isRequired |
| `ptsh→`  | PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}) |
| `ptshr→` | PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}).isRequired |


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

rccp:

```javascript
import React, {Component, PropTypes} from 'react';

export default class YourComponentName extends Component {
    render() {
        return (
            <div>
                |
            </div>
        );
    }
}

YourComponentName.propTypes = {
    
};
```
---

rjccp:

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

YourComponentName.propTypes = {
    
};
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

rmccp:

```javascript
import React, {Component, PropTypes} from 'react';
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

YourComponentName.propTypes = {
    
};
```
---

rmjccp:

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

YourComponentName.propTypes = {
    
};
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

rscp:

```javascript
import React, {PropTypes} from 'react';

const YourComponentName = (yourProps) => (
    <div>
        |
    </div>
);

YourComponentName.propTypes = {
    
};

export default YourComponentName;
```
---

rscbp:

```javascript
import React, {PropTypes} from 'react';

const YourComponentName = (yourProps) => {
    return (
        <div>
            |
        </div>
    );
};

YourComponentName.propTypes = {
    
};

export default YourComponentName;
```
---

rjscp:

```javascript
const YourComponentName = (yourProps) => (
    <div>
        |
    </div>
);

YourComponentName.propTypes = {
    
};

export default YourComponentName;
```
---

rjscbp:

```javascript
const YourComponentName = (yourProps) => {
    return (
        <div>
            |
        </div>
    );
};

YourComponentName.propTypes = {
    
};

export default YourComponentName;
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

rmscp:

```javascript
import React, {PropTypes} from 'react';
import {observer} from 'mobx-react';

const YourComponentName = observer((yourProps) => (
    <div>
        |
    </div>
));

YourComponentName.propTypes = {
    
};

export default YourComponentName;
```
---

rmscbp:

```javascript
import React, {PropTypes} from 'react';
import {observer} from 'mobx-react';

const YourComponentName = observer((yourProps) => {
    return (
        <div>
            |
        </div>
    );
});

YourComponentName.propTypes = {
    
};

export default YourComponentName;
```
---

rmjscp:

```javascript
const YourComponentName = observer((yourProps) => (
    <div>
        |
    </div>
));

YourComponentName.propTypes = {
    
};


```
---

rmjscbp:

```javascript
const YourComponentName = observer((yourProps) => {
    return (
        <div>
            |
        </div>
    );
});

YourComponentName.propTypes = {
    
};


```
---

rcfc:

```javascript
import React, {Component, PropTypes} from 'react';

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

YourComponentName.propTypes = {

};
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

mobactp:

```javascript
methodName = yourProps => |;
```
---

mobactm:

```javascript
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
@computed get propertyName(){ return |; }
```
---

pta:

```javascript
PropTypes.array,
```
---

ptar:

```javascript
PropTypes.array.isRequired,
```
---

ptb:

```javascript
PropTypes.bool,
```
---

ptbr:

```javascript
PropTypes.bool.isRequired,
```
---

ptf:

```javascript
PropTypes.func,
```
---

ptfr:

```javascript
PropTypes.func.isRequired,
```
---

ptn:

```javascript
PropTypes.number,
```
---

ptnr:

```javascript
PropTypes.number.isRequired,
```
---

pto:

```javascript
PropTypes.object,
```
---

ptor:

```javascript
PropTypes.object.isRequired,
```
---

pts:

```javascript
PropTypes.string,
```
---

ptsr:

```javascript
PropTypes.string.isRequired,
```
---

ptnd:

```javascript
PropTypes.node,
```
---

ptndr:

```javascript
PropTypes.node.isRequired,
```
---

ptel:

```javascript
PropTypes.element,
```
---

ptelr:

```javascript
PropTypes.element.isRequired,
```
---

pti:

```javascript
PropTypes.instanceOf(|),
```
---

ptir:

```javascript
PropTypes.instanceOf(|).isRequired,
```
---

pte:

```javascript
PropTypes.oneOf(['|']),
```
---

pter:

```javascript
PropTypes.oneOf(['|']).isRequired,
```
---

ptet:

```javascript
PropTypes.oneOfType([
    |
]),
```
---

ptetr:

```javascript
PropTypes.oneOfType([
    |
]).isRequired,
```
---

ptao:

```javascript
PropTypes.arrayOf(|),
```
---

ptaor:

```javascript
PropTypes.arrayOf(|).isRequired,
```
---

ptoo:

```javascript
PropTypes.objectOf(|),
```
---

ptoor:

```javascript
PropTypes.objectOf(|).isRequired,
```
---

ptsh:

```javascript
PropTypes.shape({
    |
}),
```
---

ptshr:

```javascript
PropTypes.shape({
    |
}).isRequired,
```
---