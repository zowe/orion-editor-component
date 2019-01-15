/**
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright IBM Corporation 2018, 2019
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

export const jesJCL = `
        1 //ZOWESVR  JOB MSGLEVEL=1                                               STC11253
        2 //STARTING EXEC ZOWESVR,
          // SRVRPATH='/MV3B/tmp/zoe/zowe_0.9.0_release/explorer-server'
          XX********************************************************************
          XX* This program and the accompanying materials are made available   *
          XX* under the terms of the Eclipse Public License v2.0 which         *
          XX* accompanies this distribution, and is available at               *
          XX* https://www.eclipse.org/legal/epl-v20.html                       *
          XX*                                                                  *
          XX* SPDX-License-Identifier: EPL-2.0                                 *
          XX*                                                                  *
          XX* Copyright IBM Corporation 2018                                   *
          XX********************************************************************
          XX*                                                                  *
          XX* ZOWE SERVER PROCEDURE                                            *
          XX*                                                                  *
          XX* This is a procedure to start the Zowe web server and Node server.*
          XX* This procedure requires a WebSphere Liberty Angel procedure      *
          XX* to be running, such as z/OSMF procedure "IZUANG*".               *
          XX*                                                                  *
          XX* Invoke this procedure, specifying the path where the ZOWE server *
          XX* is installed on your system.                                     *
          XX*                                                                  *
          XX*   S ZOWESVR,SRVRPATH='/tmp/zoe/zowe_0.9.0_release/explorer-server'        *
          XX*                                                                  *
          XX*                                                                  *
          XX********************************************************************
        3 XXZOWESVR   PROC SRVRPATH='/tmp/zoe/zowe_0.9.0_release/explorer-server'
          XX*-------------------------------------------------------------------
          XX* SRVRPATH - The path to the HFS directory where the Atlas server
          XX*            was installed.
          XX*-------------------------------------------------------------------
        4 XXEXPORT EXPORT SYMLIST=*
          XX*---------------------------------------------------------
          XX* Start the node server
          XX* Start the Zowe Atlas server
          XX*---------------------------------------------------------
        5 XXZOWESTEP EXEC PGM=BPXBATSL,REGION=0M,TIME=NOLIMIT,
          XX  PARM='PGM /bin/sh &SRVRPATH/../scripts/internal/run-zowe.sh'
          IEFC653I SUBSTITUTION JCL - PGM=BPXBATSL,REGION=0M,TIME=NOLIMIT,PARM='PGM /bin/sh
          /MV3B/tmp/zoe/zowe_0.9.0_release/explorer-server/../scripts/internal/run-zowe.sh'
        6 XXSTDOUT   DD SYSOUT=*
        7 XXSTDERR   DD SYSOUT=*
          XX*STDENV   DD  PATH='&SRVRPATH/wlp/usr/shared/config/zowesvr.stdenv',
          XX*             PATHOPTS=ORDONLY
          XX*-------------------------------------------------------------------
          XX* Optional logging parameters that can be configured if required
          XX*-------------------------------------------------------------------
          XX*STDOUT   DD PATH='&SRVRPATH/std.out',
          XX*            PATHOPTS=(OWRONLY,OCREAT,OTRUNC),
          XX*            PATHMODE=SIRWXU
          XX*STDERR   DD PATH='&SRVRPATH/std.err',
          XX*            PATHOPTS=(OWRONLY,OCREAT,OTRUNC),
          XX*            PATHMODE=SIRWXU`
;
