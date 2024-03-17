import { faker } from "@faker-js/faker";

const NUMBER_OF_TODOS = 5;

export function generateTestData() {
  const todos = [];
  let todoCount = NUMBER_OF_TODOS;
  while (todoCount > 0) {
    todos.push(generateNewTask());
    todoCount--;
  }
  return todos;
}

export function generateNewTask(title) {
  return {
    id: faker.string.uuid(),
    title: title ? title : faker.company.catchPhrase(),
  };
}
