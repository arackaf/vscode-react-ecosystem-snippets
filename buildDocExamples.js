var docsItems = [
    'rcc', 'rjcc', 'rtscc', 'rtsjcc', 'rmcc', 'rmjcc', 'rtsmcc', 'rtsmjcc', 'rsc', 'rscb', 'rjsc', 'rjscb', 'rmsc', 'rmscb', 
    'rmjsc', 'rmjscb', 'rcfc', 'ctor', 'cwm', 'cdm', 'cwr', 'scu', 'cwup', 'cdup', 'cwun', 
    'ren', 'sst', 'sstf', 'danger', 'mobimp', 'mobimpf', 'mobrimp', 'mobrimpf', 'mobactp', 
    'mobactm', 'mobobs', 'mobcom'
];

var fs = require('fs');

var snippets = eval('(' + fs.readFileSync('./snippets/snippets.json') + ')');
var propertyMap = new Map(Object.keys(snippets).map(key => ([snippets[key].prefix, snippetToDisplay(snippets[key].body)])));

var snippetsItems = docsItems.map(prefix => prefix + ':\n\n' + '```javascript\n' + propertyMap.get(prefix) + '\n```\n---');

fs.writeFileSync('./README.md', fs.readFileSync('./README-base.md') + snippetsItems.join('\n\n'));


function snippetToDisplay(snippetBody){
    var propsText = "yourProps"; 
    return snippetBody
                .replace(/\t/g, '    ')
                .replace(/\${1:componentName}/g, 'YourComponentName')
                .replace(/\${1:methodName}/g, 'methodName')
                .replace(/\${1:propertyName}/g, 'propertyName')
                .replace(/\${1:props}/g, propsText)
                .replace(/\${2:props}/g, propsText)
                .replace(/\${2:any}/g, 'propType')
                .replace(/\${3:any}/g, 'stateType')
                .replace(/\$0/g, '|');
}