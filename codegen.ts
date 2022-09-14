import * as dotenv from 'dotenv'
dotenv.config()
import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      'https://reserve.hasura.piek.ru/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET!,
        },
      },
    },
  ],
  documents: ['./src/**/*.graphql'],
  generates: {

    './src/generated/graphql.ts': {
      // documents: './src/**/*.graphql',
      plugins: [
        'typescript',
        'typescript-operations',
        'typed-document-node',
      ],
    },

  },
}

export default config


