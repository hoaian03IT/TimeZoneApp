import { toast } from "react-hot-toast";

export const updateToast = (type = "success", message = "", config) => {
    toast.remove();
    toast[type](message, config);
};
