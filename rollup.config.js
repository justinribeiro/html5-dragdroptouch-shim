import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';

export default [
  {
    input: ['index.js'],
    output: {
      dir: 'dist/',
      entryFileNames: 'esm.js',
      format: 'esm',
    },
    onwarn(warning) {
      if (warning.code !== 'CIRCULAR_DEPENDENCY') {
        console.error(`(!) ${warning.message}`);
      }
    },
    plugins: [
      resolve(),
      terser({
        warnings: true,
        mangle: {
          module: true,
        },
      }),
      filesize({
        showBrotliSize: true,
      }),
    ],
  },
  {
    input: ['index.js'],
    output: {
      file: 'dist/umd.js',
      format: 'umd',
      name: 'html5DragDropTouchShim',
    },
    onwarn(warning) {
      if (warning.code !== 'CIRCULAR_DEPENDENCY') {
        console.error(`(!) ${warning.message}`);
      }
    },
    plugins: [
      resolve(),
      terser({
        warnings: true,
        mangle: {
          module: true,
        },
      }),
      filesize({
        showBrotliSize: true,
      }),
    ],
  },
];
