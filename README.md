```bash
npx babel --help 
Usage: babel [options] <files ...>

Options:
  -f, --filename [filename]                   The filename to use when reading from stdin. This will be used in source-maps, errors etc.
  --presets [list]                            A comma-separated list of preset names.
  --plugins [list]                            A comma-separated list of plugin names.
  --config-file [path]                        Path to a .babelrc file to use.
  --env-name [name]                           The name of the 'env' to use when loading configs and plugins. Defaults to the value of BABEL_ENV, or else NODE_ENV, or else 'development'.
  --root-mode [mode]                          The project-root resolution mode. One of 'root' (the default), 'upward', or 'upward-optional'.
  --source-type [script|module]               
  --no-babelrc                                Whether or not to look up .babelrc and .babelignore files.
  --ignore [list]                             List of glob paths to **not** compile.
  --only [list]                               List of glob paths to **only** compile.
  --no-highlight-code                         Enable or disable ANSI syntax highlighting of code frames. (on by default)
  --no-comments                               Write comments to generated output. (true by default)
  --retain-lines                              Retain line numbers. This will result in really ugly code.
  --compact [true|false|auto]                 Do not include superfluous whitespace characters and line terminators.
  --minified                                  Save as many bytes when printing. (false by default)
  --auxiliary-comment-before [string]         Print a comment before any injected non-user code.
  --auxiliary-comment-after [string]          Print a comment after any injected non-user code.
  -s, --source-maps [true|false|inline|both]  
  --source-map-target [string]                Set `file` on returned source map.
  --source-file-name [string]                 Set `sources[0]` on returned source map.
  --source-root [filename]                    The root from which all sources are relative.
  --module-root [filename]                    Optional prefix for the AMD module formatter that will be prepended to the filename on module definitions.
  -M, --module-ids                            Insert an explicit id for modules.
  --module-id [string]                        Specify a custom name for module ids.
  -x, --extensions [extensions]               List of extensions to compile when a directory has been the input. [.js,.jsx,.es6,.es,.mjs,.cjs]
  --keep-file-extension                       Preserve the file extensions of the input files.
  -w, --watch                                 Recompile files on changes.
  --skip-initial-build                        Do not compile files before watching.
  -o, --out-file [out]                        Compile all input files into a single file.
  -d, --out-dir [out]                         Compile an input directory of modules into an output directory.
  --relative                                  Compile into an output directory relative to input directory or file. Requires --out-dir [out]
  -D, --copy-files                            When compiling a directory copy over non-compilable files.
  --include-dotfiles                          Include dotfiles when compiling and copying non-compilable files.
  --no-copy-ignored                           Exclude ignored files when copying non-compilable files.
  --verbose                                   Log everything. This option conflicts with --quiet
  --quiet                                     Don't log anything. This option conflicts with --verbose
  --delete-dir-on-start                       Delete the out directory before compilation.
  --out-file-extension [string]               Use a specific extension for the output files
  -V, --version                               output the version number
  -h, --help                                  display help for command
```