/**
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright IBM Corporation 2018
 */

export const basicJCL = `//ATLJ0001 JOB (ADL),'ATLAS',MSGCLASS=X,CLASS=A,TIME=1440
//*        THIS JOB ABENDS AND GENERATES AN FA FAULT ENTRY
//UNIT     EXEC PGM=TSTP0001,PARM='/TERMTHDACT(UADUMP)'
//STEPLIB  DD DSN=ATLAS.TEST.LOAD,DISP=SHR
//IDIOPTS  DD DISP=SHR,DSN=ATLAS.TEST.FAOPTS(IDIOPTS1)
//SYSPRINT DD SYSOUT=*
//SYSOUT   DD SYSOUT=*
//*`;

export const basicREXX = `call charout ,bEnter Command you want Help on, or QUIT: b 
pull cmd_in . 
do while cmd_in <> bQUITb
    if cmd_help.cmd_in = bb then
        say cmd_in  b   No help available.b
    else do
        say cmd_in cmd_help.cmd_in
        call charout ,bWant detailed information? b
        pull answer .
        if answer = bYb | answer = bYESb then
            address SYSTEM bhelpb cmd_in
    end
    call charout ,bEnter Command you want Help on, or QUIT: b 
    pull cmd_in . 
end`;
