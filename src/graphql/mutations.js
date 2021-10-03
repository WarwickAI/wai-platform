/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      title
      logo
      cover
      createdAt
      description
      joinLink
      shortName
      duration
      startDate
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      title
      logo
      cover
      createdAt
      description
      joinLink
      shortName
      duration
      startDate
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      title
      logo
      cover
      createdAt
      description
      joinLink
      shortName
      duration
      startDate
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
      id
      type
      description
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
      id
      type
      description
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
      id
      type
      description
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      title
      logo
      cover
      createdAt
      description
      joinLink
      shortName
      difficulty
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      title
      logo
      cover
      createdAt
      description
      joinLink
      shortName
      difficulty
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      title
      logo
      cover
      createdAt
      description
      joinLink
      shortName
      difficulty
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
