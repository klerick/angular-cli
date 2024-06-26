/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

// tslint:disable-next-line:no-implicit-dependencies
import { SchematicContext, Tree } from '@angular-devkit/schematics';

export default function () {
  return (_: Tree, context: SchematicContext) => {
    context.addTask({
      toConfiguration() {
        return { name: 'file-tasks/file-task.js' };
      },
    });
  };
}
