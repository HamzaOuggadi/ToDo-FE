import { ApiClient } from "../config/ApiClient";


export function getTasksByUserEmail(userEmail) {
    return ApiClient.get(`/api/v1/tasks/by-user-email/${userEmail}`);
}