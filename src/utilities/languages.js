/**
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright IBM Corporation 2018, 2019
 */

import jcl from './jcl';
import rexx from './rexx';

const jsonData = {
    'orion.Rexx': {
        id: 'text/rexxcontext',
        extension: ['rexx'],
        dsn: ['**REXX', '*REXX*'],
        name: 'Rexx',
        extends: 'text/plain',
        definitions: rexx,
    },
    'orion.JCL': {
        id: 'text/jclcontext',
        extension: ['jcl'],
        dsn: ['**JCL', '*JCL'],
        name: 'JCL',
        extends: 'text/plain',
        definitions: jcl,
    },
};
export { jsonData as default };
