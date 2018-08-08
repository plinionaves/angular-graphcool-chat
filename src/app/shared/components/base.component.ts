export class BaseComponent<T extends {id: number | string}> {

  trackByFn(index: number, item: T): number | string {
    return item.id;
  }

}
