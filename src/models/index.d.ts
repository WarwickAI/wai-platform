import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum GroupType {
  PROJECT = "PROJECT",
  TALK = "TALK",
  COURSE = "COURSE"
}



export declare class Group {
  readonly id: string;
  readonly type?: GroupType | keyof typeof GroupType;
  readonly description?: string;
  readonly name: string;
  constructor(init: ModelInit<Group>);
  static copyOf(source: Group, mutator: (draft: MutableModel<Group>) => MutableModel<Group> | void): Group;
}