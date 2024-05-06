import { ApiClient } from "../config/ApiClient";


export function getAllPosts() {
    return ApiClient.get("/api/v1/posts/");
}