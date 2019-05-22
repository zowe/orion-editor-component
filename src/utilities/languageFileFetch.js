/**
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright IBM Corporation 2018, 2019
 */

import { createContentAssistProvider, createHoverInfo } from './languageUtilities';
import languages from './languages';

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

function registerFiles(contentTypes, funcCreateCodeEdit) {
    contentTypes.forEach(content => {
        const contentDefns = content.definitions;
        registerHoverHelp(content, contentDefns.hover);
        registerContentAssist(content, contentDefns.hover);
        const words = contentDefns.highlighter;
        const expandedMatches = [];
        words.patterns.forEach(pattern => {
            if (pattern.expand) {
                expandedMatches.push({ [pattern.comment]: `(?i)\\b(?:${Object.keys(contentDefns.hover[pattern.comment]).join('|')})\\b` });
            }
        });
        expandedMatches.forEach(pattern => {
            words.patterns.find(element => { return element.comment === Object.keys(pattern)[0]; }).match = Object.values(pattern)[0];
        });
        window.codeEdit.serviceRegistry.registerService('orion.edit.highlighter', {}, words);
    });
    funcCreateCodeEdit(); // callback the rest of the initialisation routines.
}

export default function getLanguages(funcInitEditor) {
    const contentTypes = [];
    Object.keys(languages).forEach(key => {
        contentTypes.push(languages[key]);
    });
    registerFiles(contentTypes, funcInitEditor(contentTypes));
}
