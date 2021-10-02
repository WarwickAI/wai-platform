import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ProjectDifficulty {
  INTRODUCTORY = "INTRODUCTORY",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED"
}

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

export declare class Project {
  readonly id: string;
  readonly title?: string;
  readonly logo?: string;
  readonly cover?: string;
  readonly createdAt?: string;
  readonly description?: string;
  readonly joinLink?: string;
  readonly shortName: string;
  readonly difficulty?: ProjectDifficulty | keyof typeof ProjectDifficulty;
  constructor(init: ModelInit<Project>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}