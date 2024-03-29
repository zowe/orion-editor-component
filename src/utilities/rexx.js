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
        contentTypes: ['text/rexxcontext'],
        id: 'text/rexxcontext',
        extension: ['rexx'],
        dsn: ['*.*.REXX(*)', '*REXX.*(*)'],
        name: 'Rexx',
        extends: 'text/plain',
    },
    hover: {
        keywords1: {
            address: '__ADDRESS__\n\nRexx Keyword\nUse the ADDRESS instruction to access the host environment.',
            call: '__CALL__\n\nRexx Keyword',
            do: '__DO__\n\nRexx Keyword',
            drop: '__DROP__\n\n Rexx Keyword',
            else: '__ELSE__\n\nRexx Keyword\nAlternative flow to IF statement.\nIF expression THEN instruction; ELSE instruction',
            end: '__END__\n\n Rexx Keyword',
            exit: '__EXIT__\n\n Rexx Keyword',
            if: '__IF__\n\n Rexx Keyword\n\nIF expression THEN instruction; ELSE instruction',
            interpret: '__INTERPRET__\n\n Rexx Keyword',
            iterate: '__ITERATE__\n\n Rexx Keyword',
            leave: '__LEAVE__\n\n Rexx Keyword',
            nop: '__NOP__\n\n Rexx Keyword',
            numeric: '__NUMERIC__\n\n Rexx Keyword',
            option: '__OPTIONS__\n\n Rexx Keyword',
            otherwise: '__OTHERWISE__\n\n Rexx Keyword\nDefault flow in SELECT clause\nSELECT WHEN  expression  \n    THEN  instruction\n   OTHERWISE    instruction(s)\nEND',
            procedure: '__PROCEDURE__\n\n Rexx Keyword',
            pull: '__PULL__\n\n Rexx Keyword',
            push: '__PUSH__\n\n Rexx Keyword',
            queue: '__QUEUE__\n\n Rexx Keyword',
            return: '__RETURN__\n\n Rexx Keyword',
            say: '__SAY__\n\n Rexx Keyword',
            select: '__SELECT__\n\n Rexx Keyword\nSELECT statement (like CASE)\nSELECT WHEN  expression  \n    THEN  instruction\n   OTHERWISE    instruction(s)\nEND',
            signal: '__SIGNAL__\n\n Rexx Keyword',
            then: '__THEN__\n\n Rexx Keyword\n\nDescribes what to execute in an IF or SELECT instruction\n IF expression THEN instruction; ELSE instruction',
            when: '__WHEN__\n\n Rexx Keyword',
            while: '__WHILE__\n\n Rexx Keyword',
            until: '__UNTIL__\n\n Rexx Keyword',
            upper: '__UPPER__\n\n Rexx Keyword',
        },
        keywords2: {
            parse: '__PARSE__\n\nRexx Function',
            abbrev: '__ABBREV__\n\nRexx Function\nAbbreviation.',
            abs: '__ABS__\n\nRexx Function\nAbsolute Value.',
            arg: '__ARG__\n\n Rexx Function Argument',
            bitand: '__BITAND__\n\n Rexx Function Bit by Bit AND',
            bitor: '__BITOR__\n\n Rexx Function Bit by Bit OR',
            bitxor: '__BITXOR__\n\nRexx Function\nBit by Bit Exclusive OR.',
            b2x: '__B2X __\n\nRexx Function\nBinary to Hexadecimal.',
            center: '__CENTER__\n\nRexx Function\nCENTRE.',
            centre: '__CENTRE__\n\nRexx Function\nCENTRE correctly spelt.',
            compare: '__COMPARE__\n\n Rexx Function',
            condition: '__CONDITION__\n\n Rexx Function',
            copies: '__COPIES__\n\n Rexx Function',
            c2d: '__C2D __\n\nRexx Function\nCharacter to Decimal.',
            c2x: '__C2X__\n\nRexx Function\nCharacter to Hexadecimal.',
            datatype: '__DATATYPE__\n\n Rexx Function',
            date: '__DATE__\n\n Rexx Function',
            dbcs: '__DBCS__\n\nRexx Function\nDouble-Byte Character Set functions.',
            dbadjust: '__DBADJUST__\n\nRexx Function\nDouble-Byte Character Set function.',
            dbbracket: '__DBBRACKET__\n\nRexx Function\nDouble-Byte Character Set function.',
            dbcenter: '__DBCENTER__\n\nRexx Function\nDouble-Byte Character Set function.',
            dbleft: '__DBLEFT__\n\nRexx Function\nDouble-Byte Character Set function.',
            dbright: '__DBRIGHT__\n\nRexx Function\nDouble-Byte Character Set function.',
            dbrleft: '__DBRLEFT__\n\nRexx Function\nDouble-Byte Character Set function.',
            dbrright: '__DBRRIGHT__\n\nRexx Function\nDouble-Byte Character Set function.',
            dbtodbcs: '__DBTODBCS__\n\nRexx Function\nDouble-Byte Character Set function.',
            dbtosbcs: '__DBTOSBCS__\n\nRexx Function\nDouble-Byte Character Set function.',
            dbunbracket: '__DBUNBRACKET__\n\nRexx Function\nDouble-Byte Character Set function.',
            dbvalidate: '__DBVALIDATE__\n\nRexx Function\nDouble-Byte Character Set function.',
            dbwidth: '__DBWIDTH__\n\nRexx Function\nDouble-Byte Character Set function.',
            delstr: '__DELSTR__\n\nDelete String.',
            delword: '__DELWORD__\n\nDelete Word.',
            digits: '__DIGITS__\n\n Rexx Function',
            d2c: '__D2C__\n\nDecimal to Character).',
            d2x: '__D2X__\n\nDecimal to Hexadecimal.',
            errortext: '__ERRORTEXT__\n\n Rexx Function',
            etmode: '__DBCS__\n\nRexx Function\nDouble-Byte Character Set function supporting DBCS literal strings.',
            exmode: '__DBCS__\n\nRexx Function\nDouble-Byte Character Set function providing full logical character support to enable data operations.',
            form: '__FORM__\n\n Rexx Function',
            format: '__FORMAT __\n\n Rexx Function',
            fuzz: '__FUZZ__\n\n Rexx Function',
            insert: '__INSERT__\n\n Rexx Function',
            lastpos: '__LASTPOS__\n\nLast Position.',
            left: '__LEFT__\n\n Rexx Function',
            length: '__LENGTH__\n\n Rexx Function',
            max: '__MAX__\n\nRexx Function\nMaximum.',
            min: '__MIN__\n\nRexx Function\nMinimum.',
            overlay: '__OVERLAY__\n\n Rexx Function',
            pos: '__POS__\n\nPosition.',
            queued: '__QUEUED__\n\n Rexx Function',
            random: '__RANDOM__\n\n Rexx Function',
            reverse: '__REVERSE__\n\n Rexx Function',
            right: '__RIGHT__\n\n Rexx Function',
            setmsgrc: '__SETMSGRC__\n\nRexx Function\nSet Message Return Code.',
            sign: '__SIGN__\n\n Rexx Function',
            sourceline: '__SOURCELINE__\n\n Rexx Function',
            space: '__SPACE__\n\n Rexx Function',
            strip: '__STRIP__\n\n Rexx Function',
            substr: '__SUBSTR__\n\nSubstring.',
            subword: '__SUBWORD__\n\n Rexx Function',
            symbol: '__SYMBOL__\n\n Rexx Function',
            time: '__TIME__\n\n Rexx Function',
            trace: '__TRACE__\n\n Rexx Function',
            translate: '__TRANSLATE__\n\n Rexx Function',
            trunc: '__TRUNC__\n\nTruncate.',
            value: '__VALUE__\n\n Rexx Function',
            verify: '__VERIFY__\n\n Rexx Function',
            word: '__WORD__\n\n Rexx Function',
            wordindex: '__WORDINDEX__\n\n Rexx Function',
            wordlength: '__WORDLENGTH__\n\n Rexx Function',
            wordpos: '__WORDPOS__\n\nWord Position.',
            words: '__WORDS__\n\n Rexx Function',
            xrange: '__XRANGE__\n\nRexx Function\nHxeadecimal Range',
            x2b: '__X2B__\n\nRexx Function\nHexadecimal to Binary.',
            x2c: '__X2C__\n\nRexx Function\nHexadecimal to Character.',
            x2d: '__X2D__\n\nRexx Function\nHexadecimal to Decimal.',
        },
        keywords3: {
            DBCJUSTIFY: '__DBCJUSTIFY__\n\n TSO Function',
            EXTERNALS: '__EXTERNALS__\n\n TSO Function',
            FIND: '__FIND__\n\n TSO Function',
            GETMSG: '__GETMSG__\n\n TSO Function',
            INDEX: '__INDEX__\n\n TSO Function',
            JUSTIFY: '__JUSTIFY__\n\n TSO Function',
            LINESIZE: '__LINESIZE__\n\n TSO Function',
            LISTDSI: '__LISTDSI__\n\n TSO Function',
            MSG: '__MSG__\n\n TSO Function',
            MVSVAR: '__MVSVAR__\n\n TSO Function',
            OUTTRAP: '__OUTTRAP__\n\n TSO Function',
            PROMPT: '__PROMPT__\n\n TSO Function',
            SETLANG: '__SETLANG__\n\n TSO Function',
            STORAGE: '__STORAGE__\n\n TSO Function',
            SYSCPUS: '__SYSCPUS__\n\n TSO Function',
            SYSDSN: '__SYSDSN__\n\n TSO Function',
            SYSVAR: '__SYSVAR__\n\n TSO Function',
            TRAPMSG: '__TRAPMSG__\n\n TSO Function',
            USERID: '__USERID__\n\n TSO Function',
        },
        keywords4: {
            DELSTACK: '__DELSTACK__\n\n TSO Command',
            DROPBUF: '__DROPBUF__\n\n TSO Command',
            EXECIO: '__EXECIO__\n\n TSO Command',
            EXECUTIL: '__EXECUTIL__\n\n TSO Command',
            HE: '__HE__\n\n TSO Command',
            HI: '__HI__\n\n TSO Command',
            HT: '__HT__\n\n TSO Command',
            MAKEBUF: '__MAKEBUF__\n\n TSO Command',
            MSG: '__MSG__\n\n TSO Command',
            MVSVAR: '__MVSVAR__\n\n TSO Command',
            NEWSTACK: '__NEWSTACK__\n\n TSO Command',
            QBUF: '__QBUF__\n\n TSO Command',
            QELEM: '__QELEM__\n\n TSO Command',
            QSTACK: '__QSTACK__\n\n TSO Command',
            RT: '__RT__\n\n TSO Command',
            SUBCOM: 'SUBCOM\n\n TSO Command',
            TIME: '__TIME__\n\n TSO Command',
            TE: '__TE__\n\n TSO Command',
            TS: '__TS__\n\n TSO Command',
        },
    },
    highlighter: {
        id: 'orion.Rexx',
        contentTypes: ['text/rexxcontext'],
        patterns:
        [
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
                match: '',
                name: 'storage',
                comment: 'keywords1',
                expand: true,
            },
            {
                match: '',
                name: 'variable',
                comment: 'keywords2',
                expand: true,
            },
            {
                match: '',
                name: 'constant',
                comment: 'keywords3',
                expand: true,
            },
            {
                match: '',
                name: 'constant',
                comment: 'keywords4',
                expand: true,
            },
            {
                begin: '/\\*',
                end: '\\*/',
                name: 'comment',
            },
            {
                match: '"',
                name: 'variable-language',
            },
            {
                begin: "'",
                end: "'|$",
                name: 'cm-attribute',
            },
        ],
    },
};
export { jsonData as default };
