export class BaseComponent<T extends {id: string}> {

  trackByFn(index: number, item: T): string {
    return item.id;
  }

}
