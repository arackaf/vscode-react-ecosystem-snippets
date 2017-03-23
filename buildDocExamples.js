var docsItems = [
    'rcc', 'rjcc', 'rccp', 'rjccp', 'rmcc', 'rmjcc', 'rmccp', 'rmjccp', 'rsc', 'rscb', 'rjsc', 'rjscb', 'rscp',   
    'rscbp', 'rjscp', 'rjscbp', 'rmsc', 'rmscb', 'rmjsc', 'rmjscb', 'rmscp', 'rmscbp', 'rmjscp', 'rmjscbp', 
    'rcfc', 'ctor', 'cwm', 'cdm', 'cwr', 'scu', 'cwup', 'cdup', 'cwun', 'ren', 'sst', 'sstf', 'danger',
    'mobimp', 'mobimpf', 'mobactp', 'mobactm', 'mobobs', 'mobcom',
    'pta', 'ptar', 'ptb', 'ptbr', 'ptf', 'ptfr', 'ptn', 'ptnr', 'pto', 'ptor', 'pts', 'ptsr',
    'ptnd', 'ptndr', 'ptel', 'ptelr', 'pti', 'ptir', 'pte', 'pter', 'ptet', 'ptetr', 'ptao', 'ptaor',
    'ptoo', 'ptoor', 'ptsh', 'ptshr'
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
                .replace(/\${1:props}/g, propsText)
                .replace(/\${2:props}/g, propsText)
                .replace(/\$0/g, '|');
}