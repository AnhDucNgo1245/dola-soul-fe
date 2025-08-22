import { ENDPOINTS } from "../config/config";
import http from "../config/http";

// Mẫu cho ae viết để gọi api từ backend nhé
export const statusService = async () => {
    const { data } = await http.get(ENDPOINTS.status);
    return data;
}
