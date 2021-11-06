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



export declare class User {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Talk {
  readonly id: string;
  readonly title: string;
  readonly logo?: string;
  readonly cover?: string;
  readonly createdAt?: string;
  readonly description?: string;
  readonly joinLink?: string;
  readonly shortName: string;
  readonly duration?: string;
  readonly startDateAndTime?: string;
  constructor(init: ModelInit<Talk>);
  static copyOf(source: Talk, mutator: (draft: MutableModel<Talk>) => MutableModel<Talk> | void): Talk;
}

export declare class Course {
  readonly id: string;
  readonly title: string;
  readonly logo?: string;
  readonly cover?: string;
  readonly createdAt?: string;
  readonly description?: string;
  readonly joinLink?: string;
  readonly shortName: string;
  readonly duration?: string;
  readonly startDate?: string;
  constructor(init: ModelInit<Course>);
  static copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
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