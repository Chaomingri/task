import request from "@/utils/request";

export const login = (data) => {
    return request.post("/login", data, {
        headers: { 'Content-Type': 'application/json;charset=utf-8' }
    });
}
export const logout = () => {
    return request.get("/logout")
}
export const getInfo = (data) => {
    return request.get("/info")
}