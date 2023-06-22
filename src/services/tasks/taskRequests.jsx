import BaseUrl from '../enviroment/env';




//get all pending tasks

export async function getPendingTasks() {
    return await fetch(`${BaseUrl}tasks/pending.json`)
      .then(response => response.json())
      .then(data => {
        return data;
      });
}

//post new pending task

export async function createTask(taskData) {
  return await fetch(`${BaseUrl}/tasks/pending.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(taskData)
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
}

//delete pending task

export async function deletePendingTask(id) {
  return await fetch(`${BaseUrl}/tasks/pending/${id}.json`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(data => {
    return data;
  });

}

//get all Completed tasks

export async function getCompletedTasks() {
  return await fetch(`${BaseUrl}tasks/completed.json`)
    .then(response => response.json())
    .then(data => {
      return data;
    });
}


//post new completed task

export async function createCompletedTask(taskData) {
  return await fetch(`${BaseUrl}/tasks/completed.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(taskData)
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
}