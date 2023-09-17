import toastr from "toastr";

type notificationType = (message: string) => void;

export const showMessage: notificationType = (message: string) => {
    toastr.success(message);
};

export const showErrorMessage: notificationType = (message: string) => {
    toastr.error(message);
};