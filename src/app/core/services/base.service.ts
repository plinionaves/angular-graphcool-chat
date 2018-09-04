import { DataProxy } from 'apollo-cache';
import { DocumentNode } from 'graphql';

export abstract class BaseService {

  protected readAndWriteQuery<T = any>(
    config: {
      store: DataProxy,
      newRecord: T,
      query: DocumentNode,
      queryName: string,
      arrayOperation: 'push' | 'unshift' | 'singleRecord',
      variables?: { [key: string]: any }
    }
  ): void {

    try {

      const data = config.store.readQuery({
        query: config.query,
        variables: config.variables
      });

      switch (config.arrayOperation) {
        case 'push':
        case 'unshift':
          data[config.queryName] = [...data[config.queryName]];
          data[config.queryName][config.arrayOperation](config.newRecord);
          break;
        case 'singleRecord':
          data[config.queryName] = [config.newRecord];
      }

      config.store.writeQuery({
        query: config.query,
        variables: config.variables,
        data
      });

    } catch (e) {
      console.log(`Query ${config.queryName} not found in cache!`);
    }

  }

}
