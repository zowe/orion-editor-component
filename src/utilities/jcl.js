/**
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright IBM Corporation 2018, 2019
 */

const jsonData = {
    contenttype: {
        contentTypes: ['text/jclcontext'],
        id: 'text/jclcontext',
        extension: ['jcl'],
        dsn: ['*.*.JCL(*)', '*.JCL.*(*)'],
        name: 'JCL',
        extends: 'text/plain',
    },
    hover: {
        JCLKeywords: {
            'DD *': '__ The DD * Operation Field__\n\nDefines an in-stream data set which cannot contain JCL statements',
            'DD DATA': '__ The DD Data Operation Field__\n\nDefines an in-stream data set which can contain JCL statements.',
            'END-PROC': '__ The END PROC Operation Field__\n\n',
            AFTER: 'Operation Field',
            BEFORE: 'Operation Field',
            COMMAND: 'Operation Field',
            CONCURRENT: 'Operation Field',
            DD: '__ The DD Operation Field__\n\nDescribes each data set and requests the allocation of I/O devices.',
            ELSE: 'Operation Field',
            ENDCNTL: 'Operation Field',
            ENDGROUP: 'Operation Field',
            ENDIF: 'Operation Field',
            ENDSET: 'Operation Field',
            EXEC: '__The EXEC PGM Operation Field__\n\nMarks the beginning of a job step; optionally assigns a name to the step; identifies the program or the cataloged or in-stream procedure to be executed in this step.',
            EXPORT: 'Operation Field',
            GJOB: 'Operation Field',
            IF: 'Operation Field',
            INCLUDE: 'Operation Field',
            JCLLIB: '__The JCLLIB Operation Field__\n\nInstruction to search for the procedures executed by this job in the specified library prior to searching the system library.',
            JOB: '__The JOB Operation Field__\n\nThe first control statement. Marks the beginning of a job; assigns a name to the job.',
            JOBCAT: '__The JOBCAT Operation Field__\n\nInstruction to use the specified catalog for this job rather than the system catalog.',
            JOBGROUP: 'Operation Field',
            JOBSET: 'Operation Field',
            OUTPUT: 'Operation Field',
            PEND: 'Operation Field',
            PROC: '__The PROC Operation Field__\n\nMarks the beginning of an in-stream procedure and may mark the beginning of a cataloged procedure; assigns default values to parameters defined in the procedure.',
            SCHEDULE: 'Operation Field',
            SET: 'Operation Field',
            SJOB: 'Operation Field',
            STEPCAT: '__ The STEPCAT Operation Field__\n\nInstruction to use the specified catalog for this step rather than the system catalog.',
            STEPLIB: '__ The STEPLIB Operation Field__\n\nInstruction to search for the program executed by this step in the specified library prior to searching the system library.',
            THEN: 'Operation Field',
            XMIT: '__Operation Field__\n\nUse the XMIT command to transmit files to another JES node',
        },
        JCLParameters: {
            ACCODE: 'Data Definition Parameter',
            ACCT: 'EXEC Parameter',
            ADDRESS: 'OUTPUT Parameter',
            ADDRSPC: 'EXEC Parameter',
            AMP: 'Data Definition Parameter',
            AVGREC: 'Data Definition Parameter',
            BLKSZLIM: 'Data Definition Parameter',
            BUILDING: 'OUTPUT Parameter',
            BURST: 'Data Definition Parameter',
            BYTES: 'JOB Parameter',
            CARDS: 'JOB Parameter',
            CCSID: 'Data Definition Parameter',
            CHARS: 'Data Definition Parameter',
            CHKPT: 'Data Definition Parameter',
            CKPTLINE: 'OUTPUT Parameter',
            CKPTPAGE: 'OUTPUT Parameter',
            CKPTSEC: 'OUTPUT Parameter',
            CLASS: '__JOB Parameter__\n\nRun job in this CLASS',
            CNTL: 'Data Definition Parameter',
            COLORMAP: 'OUTPUT Parameter',
            COMPACT: 'OUTPUT Parameter',
            COMSETUP: 'OUTPUT Parameter',
            COND: '__EXEC Parameter__\n\nDo not execute this job step if this condition is TRUE',
            CONTROL: 'OUTPUT Parameter',
            COPIES: 'Data Definition Parameter',
            CREATE: '__The CREATE Data Definition Parameter__\n\nPerform a file create.',
            DATA: 'Data Definition Parameter',
            DATACK: 'OUTPUT Parameter',
            DATACLAS: 'Data Definition Parameter',
            DCB: '__DCB__\n\nData Definition Parameter\nData Control Block\nSpecify attributes to use for this dataset',
            DDNAME: '__Data Definition Parameter__\n\nRefer to the named DD statement for attributes of this dataset',
            DEFAULT: 'OUTPUT Parameter',
            DELETE: '__ The DELETE Data Definition Parameter__\n\nPerform a file delete.',
            DEPT: 'OUTPUT Parameter',
            DEST: 'Data Definition Parameter',
            DISP: '__Data Definition Parameter__\n\nSpecify if this dataset exists: OLD|SHR|MOD and what to do with it: KEEP|PASS|DELETE|CATLG|UNCATLG',
            DLM: '__Data Definition Parameter__\n\nTwo-character delimiter to indicate the end of in-stream data',
            DPAGELBL: 'OUTPUT Parameter',
            DSID: 'Data Definition Parameter',
            DSN: '__DSN__\n\n Data Definition Parameter\nDataset Name ',
            DSNAME: '__DSNAME__\n\n Data Definition Parameter\nDataset Name ',
            DSNTYPE: 'Data Definition Parameter',
            DSORG: '__ The DSORG Data Definition Parameter__\n\nDataset Organisation: typically PO(partitioned)|PS(sequential)',
            DUMMY: '__Data Definition Parameter__\n\nNo I/O is to be performed on this dataset.  READ gives EOF and WRITE does nothing',
            DUPLEX: 'OUTPUT Parameter',
            DYNAM: 'Data Definition Parameter',
            DYNAMNBR: 'EXEC Parameter',
            ERROR: 'JOBGROUP Parameter',
            EXPDT: '__Data Definition Parameter__\n\nFile expiry date',
            FCB: 'Data Definition Parameter',
            FILEDATA: 'Data Definition Parameter',
            FLASH: 'Data Definition Parameter',
            FORMDEF: 'OUTPUT Parameter',
            FORMLEN: 'OUTPUT Parameter',
            FORMS: 'OUTPUT Parameter',
            FREE: 'Data Definition Parameter',
            FSSDATA: 'OUTPUT Parameter',
            GROUP: 'JOB Parameter',
            GROUPID: 'OUTPUT Parameter',
            HOLD: 'Data Definition Parameter',
            HOLDUNTL: 'SCHEDULE Parameter',
            INDEX: 'OUTPUT Parameter',
            INTRAY: 'OUTPUT Parameter',
            JESDS: 'OUTPUT Parameter',
            KEYLEN: 'Data Definition Parameter',
            KEYOFF: 'Data Definition Parameter',
            LABEL: '__Data Definition Parameter__\n\nTape label:  Specify nth file to access, and its label type',
            LGSTREAM: 'Data Definition Parameter',
            LIKE: 'Data Definition Parameter',
            LINDEX: 'OUTPUT Parameter',
            LINECT: 'OUTPUT Parameter',
            LINES: 'JOB Parameter',
            MEMBER: 'INCLUDE Parameter',
            MGMTCLAS: 'Data Definition Parameter',
            MODIFY: 'Data Definition Parameter',
            MSGCLASS: '__JOB Parameter__\n\nSYSOUT CLASS for job messages',
            MEMLIMIT: 'JOB Parameter',
            MSGLEVEL: '__JOB Parameter__\n\nLevel of message logging. For all, specify MSGLEVEL=(1,1)',
            NAME: 'OUTPUT Parameter',
            NOTIFY: '__JOB Parameter__\n\nTSO USERID to notify of job start and end events',
            OFFSETXB: 'OUTPUT Parameter',
            OFFSETXF: 'OUTPUT Parameter',
            OFFSETYB: 'OUTPUT Parameter',
            OFFSETYF: 'OUTPUT Parameter',
            ONERROR: 'JOBGROUP Parameter',
            ORDER: 'JCLLIB Parameter',
            OUTBIN: 'OUTPUT Parameter',
            OUTDISP: 'OUTPUT Parameter',
            OUTLIM: '__Data Definition Parameter__\n\nLimit for number of lines written to a SYSOUT dataset.  Specify 0 for no limit',
            OVERLAYB: 'OUTPUT Parameter',
            OVERLAYF: 'OUTPUT Parameter',
            OVFL: 'OUTPUT Parameter',
            OWNER: 'JOBGROUP Parameter',
            PAGEDEF: 'OUTPUT Parameter',
            PAGES: 'JOB Parameter',
            PARM: '__EXEC Parameter__\n\nParameter string to pass to problem program named in the PGM field',
            PARMDD: 'EXEC Parameter',
            PASSWORD: '__JOB Parameter__\n\nPassword of TSO userid under which to run this job',
            PATH: '__Data Definition Parameter__\n\nPathname of USS file.  Pathname is case-sensitive',
            PATHDISP: 'Data Definition Parameter',
            PATHMODE: 'Data Definition Parameter',
            PATHOPTS: 'Data Definition Parameter',
            PERFORM: 'EXEC Parameter',
            PGM: '__EXEC Parameter__\n\nName of problem program to execute in this step',
            PIMSG: 'OUTPUT Parameter',
            PROTECT: 'Data Definition Parameter',
            PRTY: 'JOB Parameter',
            QNAME: 'Data Definition Parameter',
            RD: 'EXEC Parameter',
            RECORG: 'Data Definition Parameter',
            REFDD: 'Data Definition Parameter',
            REGION: '__EXEC Parameter__\n\nAmount of storage to use for this STEP',
            REGIONX: 'EXEC Parameter',
            RESTART: '__JOB Parameter__\n\nStart this job at the named STEP',
            RETAINF: 'OUTPUT Parameter',
            RETAINS: 'OUTPUT Parameter',
            RETPD: '__Data Definition Parameter__\n\nRetention period for dataset',
            RETRYL: 'OUTPUT Parameter',
            RETRYT: 'OUTPUT Parameter',
            RLS: 'Data Definition Parameter',
            ROOM: '__OUTPUT Parameter__\n\nPhysical location where output should be sent',
            SCHENV: 'JOB Parameter',
            SECLABEL: 'JOB Parameter',
            SECMODEL: 'Data Definition Parameter',
            SEGMENT: 'Data Definition Parameter',
            SPACE: '__Data Definition Parameter__\n\nDisk space to allocate for this new dataset',
            SPIN: 'Data Definition Parameter',
            STARTBY: 'SCHEDULE Parameter',
            STORCLAS: 'Data Definition Parameter',
            SUBCHARS: 'XMIT_Parameter',
            SUBSYS: 'Data Definition Parameter',
            SYMBOLS: 'Data Definition Parameter',
            SYSAFF: '__JOBGROUP Parameter__\n\nLPAR on which to run this job',
            SYSAREA: 'OUTPUT Parameter',
            SYSDA: '__UNIT Parameter__\n\nGeneric disk storage',
            SYSIN: '__ The SYSIN Data Definition Parameter__\n\nIn-stream dataset.',
            SYSOUT: '__ The SYSOUT Data Definition Parameter__\n\nUse the SYSOUT parameter to identify this data set as a system output data set, usually called a sysout data set.',
            SYSPRINT: '__ The SYSPRINT Data Definition Parameter__\n\nUse the SYSPRINT parameter to identify this data set as a system output data set, usually used by utility programs.',
            SYSPUNCH: '__ The SYSPUNCH Data Definition Parameter__\n\nThe SYSPUNCH data set is a temporary data set containing object modules assembled by running the job stream produced by system generation or the GENERATE command.',
            SYSTEM: 'JOBGROUP Parameter',
            TERM: 'Data Definition Parameter',
            THRESHLD: 'OUTPUT Parameter',
            TIME: '__EXEC Parameter__\n\nTime to allocate for the execution of this step, in minutes and seconds.  Job will be terminated if this time is exceeded',
            TITLE: 'OUTPUT Parameter',
            TRC: 'OUTPUT Parameter',
            TYPE: 'JOBGROUP Parameter',
            TYPRUN: '__JOB Parameter__\n\nSpecify TYPRUN=SCAN to verify the syntax of the JCL.  The job will not be run',
            UCS: 'Data Definition Parameter',
            UNIT: '__Data Definition Parameter__\n\nThe type of device to use for this dataset; DISK or TAPE',
            USER: '__JOB Parameter__\n\nTSO userid under which to run this job',
            USERDATA: 'OUTPUT Parameter',
            USERLIB: 'OUTPUT Parameter',
            VOLUME: '__Data Definition Parameter__\n\nThe specific DISK or TAPE device to use for this dataset',
            WHEN: 'BEFORE or AFTER Parameter',
            WITH: 'SCHEDULE Parameter',
            WRITER: 'OUTPUT Parameter',
        },
        DSNParameters: {
            CYL: '__ The CYL SPACE Field__\n\nSPACE is to be allocated in storage disk cylinders',
            DEL: '__ The DEL DISP Field__\n\nFile is to be deleted at the end of the step',
            DELETE: '__ The DELETE DISP Field__\n\nFile is to be deleted at the end of the step',
            TRK: '__ The TRK SPACE Field__\n\nSPACE is to be allocated in storage disk tracks',
            KEEP: '__ The KEEP DISP Field__\n\nKEEP the file at the end of the step',
            NEW: '__ The NEW DISP Field__\n\nCreate a NEW file at the start of the step',
            MOD: '__ The MOD DISP Field__\n\nFile is to be opened for append at the start of the step',
            CATLG: '__ The CATLG DISP Field__\n\nFile is to be cataloged at the end of the step',
            OLD: '__ The OLD DISP Field__\n\nFile already exists, unique access required.',
            SHR: '__ The SHR DISP Field__\n\nFile already exists, shared access required.',
            RLSE: '__ The RLSE SPACE Field__\n\nRelease unused SPACE specified in this allocation',
            RECFM: '__The RECFM DCB Parameter__\n\nRecord format: fixed(F)|variable(V) + blocked(B)|unblocked(U) + spanned(S) + ASA(A)|machine(M)',
            BLKSIZE: '__ The BLKSIZE DCB Parameter__\n\nMaximum length of a physical block in bytes',
            LRECL: '__ The LRECL DCB Parameter__\n\nLogical Record Length in bytes',
        },
    },
    highlighter: {
        id: 'orion.JCL',
        contentTypes: ['text/jclcontext'],
        patterns: [
            { include: 'orion.lib#string_doubleQuote' },
            { include: 'orion.lib#string_singleQuote' },
            { include: 'orion.lib#brace_open' },
            { include: 'orion.lib#brace_close' },
            { include: 'orion.lib#bracket_open' },
            { include: 'orion.lib#bracket_close' },
            { include: 'orion.lib#parenthesis_open' },
            { include: 'orion.lib#parenthesis_close' },
            { include: 'orion.lib#number_decimal' },
            { include: 'orion.lib#number_hex' },
            {
                begin: '\\bDD\\s+((\\*)|(DATA))',
                end: '^/',
                contentName: 'entity-name-tag',
                comment: 'DD * card data',
            },
            {
                match: '\\bDD\\s+((\\*)|(DATA))',
                name: 'variable-language',
                comment: 'DD * card data',
            },
            {
                match: '',
                name: 'storage',
                comment: 'DSNParameters',
                expand: true,
            },
            {
                match: '',
                name: 'cm-string',
                comment: 'JCLParameters',
                expand: true,
            },
            {
                match: '',
                name: 'variable-language',
                comment: 'JCLKeywords',
                expand: true,
            },
            {
                match: '^\\/\\/[\\d\\w]{1,8}',
                name: 'textview',
                comment: '//* start',
            },
            {
                begin: "([',\b)] )",
                end: '($)',
                contentName: 'comment',
                comment: "closing bracket floating comments - not working fully \\' probably affected by multiline test",
            },
            {
                match: '(((XX)|(\\/\\/))\\*.*)|(^\\/\\/ \\b[ A-Za-z0-9]{68}.)|(^\\/\\/ \\b[ A-Za-z0-9]{3,}$)|(\\/\\*.+\\*\\/$)',
                name: 'comment',
                comment: '//* comment',
            },
            {
                match: '\\b-?(\\.\\d+[^\\n]|\\d+\\.?\\d+\\b[^\\n])',
                name: 'constant.numeric.number',
                comment: 'general numbers',
            },
            {
                begin: '^\\/\\/',
                end: '[ \\n]',
                contentName: 'textview',
                comment: 'next characters - no effect could drop',
            },
            {
                begin: '^\\/\\*',
                end: '[ ]',
                contentName: 'variable-language',
                comment: 'JECL',
            },
            {
                begin: "'",
                end: "'",
                name: 'cm-attribute',
                comment: 'between quotes multiline',
            },
        ],
    },
};
export { jsonData as default };
