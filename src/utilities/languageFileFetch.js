/**
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright IBM Corporation 2018
 */

import { createContentAssistProvider, createHoverInfo } from './languageUtilities';

function registerHoverHelp(contentType, highlightSchema) {
    window.codeEdit.serviceRegistry.registerService('orion.edit.hover',
        createHoverInfo(highlightSchema),
        {
            name: 'Hover helper',
            contentType: [contentType.id],
        },
    );
}

function registerContentAssist(contentType, contentAssistSchema) {
    window.codeEdit.serviceRegistry.registerService('orion.edit.contentassist',
        createContentAssistProvider(contentAssistSchema),
        {
            name: 'Content assistant provider',
            contentType: [contentType.id],
        },
    );
}

function registerFiles(contentTypes, host, funcCreateCodeEdit) {
    for (let i = 0; i < contentTypes.length; i++) {
        const contentType = contentTypes[i];
        if (contentType.definitions) {
            fetch(`${host}/${contentType.definitions}`)
                .then(response => { return response.json(); })
                .then(definitions => {
                    registerHoverHelp(contentType, definitions.hover);
                    registerContentAssist(contentType, definitions.hover);

                    const words = definitions.highlighter;
                    words.patterns.forEach(pattern => {
                        if (pattern.expand) {
                            pattern.match = `(?i)\\b(?:${Object.keys(definitions.hover[pattern.comment]).join('|')})\\b`;
                        }
                    });
                    window.codeEdit.serviceRegistry.registerService('orion.edit.highlighter', {}, words);
                });
        }
    }
    funcCreateCodeEdit(); // callback the rest of the initialisation routines.
}

function fetchLanguageFiles(file) {
    return new Promise((resolve => {
        const contentTypes = [];
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    (console.log(`Response is not okay: : ${file}`, response));
                }
                return response.json();
            })
            .then(json => {
                Object.keys(json).forEach(key => {
                    const content = {
                        id: (json[key].highlighter) ? json[key].highlighter.id : json[key].id,
                        extension: json[key].extension,
                        dsn: json[key].dsn,
                        patterns: json[key].patterns,
                        name: json[key].name,
                        extends: json[key].extends,
                        definitions: json[key].definitions,
                    };
                    contentTypes.push(content);
                });
                resolve(contentTypes);
            }).catch(error => {
                console.log(`Failed to locate language files: ${file} `, error.message);
                resolve(contentTypes);
            });
    }));
}

export default function getLanguages(funcInitEditor, host) {
    const languages = 'languages/languages.json';
    let callHost = '';
    if (location.hostname === 'localhost' && !host) {
        callHost = `http://${location.host}`;
    } else {
        callHost = `https://${host}`;
    }

    fetchLanguageFiles(`${callHost}/${languages}`)
        .then(contentTypes => {
            registerFiles(contentTypes, callHost, funcInitEditor(contentTypes));
        });
}
