import { Transformer } from '@parcel/plugin';
import pug from 'pug';
import path from "path";

export default new Transformer({
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
});
