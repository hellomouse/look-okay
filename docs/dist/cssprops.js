/**
 * Auto-generate CSS property tables
 * For example:
 * 
 * <cssprops>
 * .class1 | prop: 1
 * .class2 | prop: 2
 * </cssprosp>
 *
 * Is converted into a formatted table
 */

window.$docsify.plugins.push(hook => {
    hook.afterEach(html => {
        const start = '<cssprops>';
        const end = '<\/cssprops>';
        const regex = new RegExp(start + '([\\s\\S]*?)' + end, 'gm');

        return html.replace(regex, str => {
            // Remove leading and ending tags
            str = str.substring(start.length + 1, str.length - end.length);

            // Format str into table body
            str = str
                .split('\n')
                .map(line => {
                    // Ignore empty lines
                    if (line.split(' | ').length === 1 && line.split(' | ')[0] === '')
                        return '';
                    
                    // Custom newline
                    if (line === '---')
                        return '<tr><td><br></td><tr>';
                    
                    return `<tr>${
                        line
                            .split(' | ')
                            .map(x => `<td>${
                                x
                                    .split('\\n')
                                    .map(y => `<code class="bg-transparent">${y}</code>`)
                                    .join('<br>')
                            }</td>`)
                            .join('\n') 
                        }</tr>`;
                })
                .join('\n');
                
            return `
            <details>
                <summary class="css-table-summary select-none">Toggle CSS Table</summary>
                <div class="css-table-wrapper">
                    <table class="css-table">
                        <thead class="css-table_thead">
                            <tr>
                                <th class="w-auto lg:w-40">Class</th>
                                <th>Properties</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${str}
                        </tbody>
                    </table>
                </div>
            </details>`;
        });
    });
});
