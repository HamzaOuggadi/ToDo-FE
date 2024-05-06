import { ApiClient } from "../config/ApiClient";


export function getTodoListByUser(userEmail) {
    return ApiClient.get(`/api/v1/todos/by-email/${userEmail}`);
}