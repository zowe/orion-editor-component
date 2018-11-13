/**
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright IBM Corporation 2016, 2018
 */

/* global codeEdit */

import PropTypes from 'prop-types';
import React from 'react';

import BuiltCodeEdit from './Orion/code_edit/built-codeEdit';
import './Orion/code_edit/built-codeEdit.css';
import getLanguages from './utilities/languageFileFetch';

export default class OrionEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editorViewer: null,
            height: 0,
        };
        this.updateEditorHeight = this.updateEditorHeight.bind(this);
        this.onEditorRef = this.onEditorRef.bind(this);
        this.createCodeEditor = this.createCodeEditor.bind(this);
        this.initEditor = this.initEditor.bind(this);
    }

    componentDidMount() {
        const { languageFilesHost, editorTopOffset } = this.props;
        if (!window.codeEdit) {
            getLanguages(this.initEditor, languageFilesHost);
        } else {
            this.createCodeEditor();
        }
        this.updateEditorHeight(editorTopOffset);
        window.addEventListener('resize', () => { this.updateEditorHeight(editorTopOffset); });
    }

    componentWillReceiveProps(nextProps) {
        const { content, syntax, readonly } = this.props;
        if (content !== nextProps.content) {
            this.state.editorViewer.setContents(nextProps.content, syntax);
        }
        if (syntax !== nextProps.syntax) {
            this.changeSyntax(nextProps.syntax, nextProps.content);
        }
        if (readonly !== nextProps.readonly) {
            this.state.editorViewer.readonly = readonly;
            this.state.editorViewer.editor.getTextView().setOptions({ readonly });
        }
    }

    onEditorRef(node) {
        if (node) {
            this.editorRef = node;
        }
    }

    createCodeEditor() {
        const { passContentToParent, readonly, editorReady } = this.props;
        codeEdit.create({ parent: 'embeddedEditor' })
            .then(editorViewer => {
                this.setState({ editorViewer });
                editorViewer.setContents(' ', 'text/plain');
                if (passContentToParent) {
                    editorViewer.editor.addEventListener('InputChanged', () => {
                        passContentToParent(editorViewer.editor.getTextView().getText());
                    });
                }
                if (readonly) {
                    // Only way to initialise editor as readonly
                    editorViewer.readonly = readonly; // eslint-disable-line no-param-reassign
                }
                if (editorReady) {
                    editorReady();
                }
            });
    }

    initEditor(contentTypes) {
        if (!window.codeEdit) {
        // TODO:: We should have the parameters passed in as a prop
            window.codeEdit = new BuiltCodeEdit(
                {
                    _defaultPlugins: [],
                    editorConfig: {
                        autoPairParentheses: true,
                        autoPairBraces: true,
                        autoPairSquareBrackets: true,
                        autoPairAngleBrackets: false,
                        autoPairQuotations: true,
                    },
                },
            );
            if (contentTypes) {
                window.codeEdit.serviceRegistry.registerService('orion.core.contenttype', {}, {
                    contentTypes,
                });
            }
            return this.createCodeEditor;
        }
        return null;
    }

    updateEditorHeight(optionalOffset) {
        if (this.editorRef) {
            let offset;
            if (typeof optionalOffset === 'number') {
                offset = optionalOffset;
            } else {
                offset = this.editorRef.offsetTop;
            }
            this.setState({ height: window.innerHeight - offset });
        }
    }

    changeSyntax(syntax, content) {
        if (!content) {
            this.state.editorViewer.setContents(this.state.editorViewer.editor.getTextView().getText(), syntax);
        } else {
            this.state.editorViewer.setContents(content, syntax);
        }
    }

    render() {
        const { fullscreen } = this.props;
        const editorFullscreenStyle = { height: '100%', width: '100%' };
        return (
            <div style={fullscreen ? editorFullscreenStyle : null}>
                <div
                    id="embeddedEditor"
                    ref={this.onEditorRef}
                    className="orionEditor"
                    style={{ width: '100%', height: this.state.height }}
                />
            </div>
        );
    }
}

OrionEditor.propTypes = {
    content: PropTypes.string,
    fullscreen: PropTypes.bool,
    languageFilesHost: PropTypes.string,
    syntax: PropTypes.string,
    passContentToParent: PropTypes.func,
    editorTopOffset: PropTypes.number,
    readonly: PropTypes.bool,
    editorReady: PropTypes.func,
};
