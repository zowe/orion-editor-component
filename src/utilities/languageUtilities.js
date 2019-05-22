/**
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright IBM Corporation 2018, 2019
 */

export function createContentAssistProvider(words) {
    return {
        computeProposals(buffer, offset, context) {
            const result = [];
            Object.keys(words).forEach(section => {
                Object.keys(words[section]).forEach(keyword => {
                    if (keyword.startsWith(context.prefix) || keyword.startsWith(context.prefix.toUpperCase())) {
                        result.push({
                            proposal: keyword,
                            overwrite: true,
                            hover: { content: words[section][keyword], type: 'markdown' },
                        });
                    }
                });
            });
            return result;
        },
    };
}

export function createHoverInfo(words) {
    const pattern = new RegExp('^\\w+$');
    return {
        computeHoverInfo(editorContext, context) {
            const myPromise = editorContext.getText().then(text => {
                if (context.proposal && context.proposal.hover) {
                    return context.proposal.hover;
                }
                let start = context.offset;
                let end = context.offset;
                while (start > 0 && pattern.test(text.substr(start - 1, 1))) {
                    start -= 1;
                }
                while (end < text.length && pattern.test(text.substr(start, (end - start) + 1))) {
                    end += 1;
                }
                const hoverword = text.substr(start, end - start);
                let content = '';

                if (hoverword.length > 0) {
                    Object.keys(words).forEach(section => {
                        Object.keys(words[section]).forEach(keyword => {
                            // TODO:: we should break out of the loop once we've found our content
                            if (keyword === hoverword) {
                                content = words[section][keyword];
                            }
                        });
                    });
                }
                if (content.length > 0) {
                    return { title: hoverword,
                        content,
                        type: 'markdown' };
                }
                return {};
            });
            return myPromise;
        },
    };
}
