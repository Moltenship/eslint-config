declare module 'eslint-plugin-import' {
  import type { Plugin } from 'eslint-define-config'

  let plugin: Plugin
  export default plugin
}

declare module '@typescript-eslint/eslint-plugin' {
  import type { Plugin } from 'eslint-define-config'

  let plugin: Plugin
  export default plugin
}

declare module '@typescript-eslint/parser' {
  import type { Parser } from 'eslint-define-config'

  let parser: Parser
  export default parser
}

declare module 'eslint-plugin-jsx-a11y' {
  import type { Plugin } from 'eslint-define-config'

  let plugin: Plugin
  export default plugin
}

declare module 'eslint-plugin-react' {
  import type { Plugin, FlatESLintConfig } from 'eslint-define-config'

  let plugin: Plugin & {
    configs: {
      flat: {
        recommended: FlatESLintConfig
        "jsx-runtime": FlatESLintConfig
      }
    }
  }
  export default plugin
}

declare module 'eslint-plugin-react-hooks' {
  import type { Plugin } from 'eslint-define-config'

  let plugin: Plugin
  export default plugin
}

declare module 'eslint-plugin-testing-library' {
  import type { Plugin, FlatESLintConfig} from 'eslint-define-config'

  let plugin: Plugin & {
    configs: {
      'flat/react': FlatESLintConfig
    }
  }
  export default plugin
}
