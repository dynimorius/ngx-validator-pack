/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { SequenceConfig } from "../interfaces/sequence-config.interface";

export const SequenceConfigFactory = (
  sequence: (string | { [key: string]: any })[],
  functionConfigMap: {
    [key: string]: SequenceConfig;
  }
): SequenceConfig[] => {
  const sequenceConfig: SequenceConfig[] = [];
  sequence.forEach((fun: string | { [key: string]: any }): void => {
    if (typeof fun === "string") {
      sequenceConfig.push(functionConfigMap[fun]);
    } else {
      Object.entries(fun).forEach((entry): void => {
        let tempConfig = functionConfigMap[entry[0]];
        tempConfig.validationFunConfig = {
          ...tempConfig.validationFunConfig,
          ...entry[1],
        };
        sequenceConfig.push(tempConfig);
      });
    }
  });
  return sequenceConfig;
};
