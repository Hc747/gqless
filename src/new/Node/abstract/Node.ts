import { Accessor } from '../../Accessor'

export type NodeDataType<T extends Node<any>> = T extends Node<infer U>
  ? U
  : never

export class Node<DataType = never> {
  // This needs to be here for some reason
  private __dataType: DataType

  constructor() {}
}
