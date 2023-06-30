import BaseUrl from '../enviroment/env';




//get all pending tasks

export async function getPendingTasks(uid) {
    return await fetch(`${BaseUrl}/user/${uid}/tasks/pendingTask.json`)
      .then(response => response.json())
      .then(data => {
        return data;
      });
}

//post new pending task

export async function createTask(taskData,uid) {
  return await fetch(`${BaseUrl}/user/${uid}/tasks/pendingTask.json`, {
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

export async function deletePendingTask(taskId,uid) {
  return await fetch(`${BaseUrl}/user/${uid}/tasks/pendingTask/${taskId}.json`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(data => {
    return data;
  });

}

//Edit pending task

export async function editTask(taskData,uid) {
  return await fetch(`${BaseUrl}/user/${uid}/tasks/pendingTask/${taskData.id}.json`, {
    method: 'PUT',
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

//get all Completed tasks

export async function getCompletedTasks(uid) {
  return await fetch(`${BaseUrl}/user/${uid}/tasks/completedTask.json`)
    .then(response => response.json())
    .then(data => {
      return data;
    });
}


//post new completed task

export async function createCompletedTask(taskData,uid) {
  return await fetch(`${BaseUrl}/user/${uid}/tasks/completedTask.json`, {
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