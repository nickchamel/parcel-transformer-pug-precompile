// @flow

import path from 'path'
import { Transformer } from '@parcel/plugin';
import pug from 'pug'
import type { Transformer as ITransformer } from '@parcel/types';

const transformer = new Transformer(({
  async transform({ asset }) {
    const content = await asset.getCode();
    const sourceString = pug.compileClient(content, {
      compileDebug: false,
      basedir: path.dirname(asset.filePath),
      filename: asset.filePath,
    });

    asset.type = 'js';
    asset.setCode(`
      ${sourceString}
      export default template;
    `);

    return [asset];
  },
}: ITransformer));

export default (transformer: ITransformer);
