import { JsonObject } from '@angular-devkit/core';
jest.mock('tsconfig-paths-webpack-plugin');
import { PackageElectronBuilderOptions } from './package.impl';
import { Architect } from '@angular-devkit/architect';
import { getTestArchitect } from '../../utils/testing';

describe('MakeElectronBuilder', () => {
  let testOptions: PackageElectronBuilderOptions & JsonObject;
  let architect: Architect;

  beforeEach(async () => {
    [architect] = await getTestArchitect();

    testOptions = {
      root: '.',
      platform: 'windows',
      arch: 'x64',
      asar: true,
      name: 'electronapp',
      frontendProject: 'frontend',
      prepackageOnly: false,
      sourcePath: 'dist/apps',
      outputPath: 'dist/packages',
    };
  });

  describe('run', () => {
    it('should find a way to test application packaging', async () => {
      expect(true).toEqual(true);
    });

    // it('should emit the outfile along with success', async () => {
    //   const run = await architect.scheduleBuilder(
    //     'nx-electron:make',
    //     testOptions
    //   );
    //   const output = await run.output.toPromise();

    //   await run.stop();

    //   expect(output.success).toEqual(true);
    // });
  });
});
