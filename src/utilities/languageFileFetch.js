/**
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright IBM Corporation 2018, 2019
 */
/* eslint no-param-reassign: "off" */

import { createContentAssistProvider, createHoverInfo } from './languageUtilities';
import languages from './languages';

function registerHoverHelp(contentType, highlightSchema) {
    window.codeEdit.serviceRegistry.registerService('orion.edit.hover',
        createHoverInfo(highlightSchema),
        {
            name: 'Hover helper',
            contentType: [contentType.id],
        });
}

function registerContentAssist(contentType, contentAssistSchema) {
    window.codeEdit.serviceRegistry.registerService('orion.edit.contentassist',
        createContentAssistProvider(contentAssistSchema),
        {
            name: 'Content assistant provider',
            contentType: [contentType.id],
        });
}

function registerFiles(contentTypes, funcCreateCodeEdit) {
    contentTypes.forEach(content => {
        const contentDefns = content.definitions;
        registerHoverHelp(content, contentDefns.hover);
        registerContentAssist(content, contentDefns.hover);
        const words = contentDefns.highlighter;
        words.patterns.forEach(pattern => {
            if (pattern.expand) {
                pattern.match = `(?i)\\b(?:${Object.keys(contentDefns.hover[pattern.comment]).join('|')})\\b`;
            }
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
