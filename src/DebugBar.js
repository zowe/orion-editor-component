/**
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright IBM Corporation 2016, 2018
 */

import React from 'react';
import OrionEditor from './OrionEditor';
import { basicJCL, basicREXX, jesJCL } from '../resources/languageSamples';

class DebugBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'hello world',
            syntax: 'text/plain',
            readonly: false,
        };
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.setState({ content: 'Hello world this is new Content' }); }}>
                    Basic content
                </button>
                <button onClick={() => { this.setState({ readonly: !this.state.readonly }); }}>
                    toggle readonly
                </button>
                <button onClick={() => { this.setState({ content: basicJCL }); }}>
                    Basic JCL
                </button>
                <button onClick={() => { this.setState({ content: basicREXX }); }}>
                    Basic REXX
                </button>
                <button onClick={() => { this.setState({ content: jesJCL }); }}>
                    JES JCL
                </button>
                <button onClick={() => { this.setState({ syntax: 'text/jclcontext' }); }}>
                    Set syntax JCL
                </button>
                <button onClick={() => { this.setState({ syntax: 'text/rexxcontext' }); }}>
                    Set syntax REXX
                </button>
                  Current syntax: {this.state.syntax}

                <OrionEditor content={this.state.content} syntax={this.state.syntax} readonly={this.state.readonly} />
            </div>
        );
    }
}

export default DebugBar;
